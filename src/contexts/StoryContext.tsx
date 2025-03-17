import {
  useState,
  useEffect,
  createContext,
  FC,
  ReactNode,
  useContext,
} from "react";
import { db } from "../firebaseConnection";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  serverTimestamp,
  DocumentData,
  QuerySnapshot,
  Timestamp,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { AuthContext } from "./auth";

export interface StoryInterface {
  id?: string;
  uid: string;
  authorName: string;
  title: string;
  content: string;
  createdAt: Timestamp | Date;
  published: boolean;
}

export interface StoryContextInterface {
  stories: StoryInterface[];
  myStories: StoryInterface[];
  feedStories: StoryInterface[];
  loadingStories: boolean;
  saveStory: (title: string, content: string) => Promise<void>;
  publishStory: (title: string, content: string) => Promise<void>;
  loadMyStories: () => Promise<void>;
  loadFeedStories: () => Promise<void>;
  setStoryToDelete: (story: StoryInterface | null) => void;
  deleteStory: () => Promise<void>;
  storyToDelete: StoryInterface | null;
}

export const StoryContext = createContext<StoryContextInterface | undefined>(
  undefined
);

const StoryProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [stories, setStories] = useState<StoryInterface[]>([]);
  const [myStories, setMyStories] = useState<StoryInterface[]>([]);
  const [feedStories, setFeedStories] = useState<StoryInterface[]>([]);
  const [loadingStories, setLoadingStories] = useState(false);
  const [storyToDelete, setStoryToDelete] = useState<StoryInterface | null>(
    null
  );

  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (authContext?.user) {
      loadMyStories();
      loadFeedStories();
    }
  }, [authContext?.user]);

  async function deleteStory() {
    if (!storyToDelete || !storyToDelete.id) {
      toast.error("Erro: Nenhuma história selecionada para exclusão.");
      return;
    }

    setLoadingStories(true);

    try {
      const storyRef = doc(db, "stories", storyToDelete.id);
      await deleteDoc(storyRef);

      setMyStories((prev) =>
        prev.filter((story) => story.id !== storyToDelete.id)
      );
      setFeedStories((prev) =>
        prev.filter((story) => story.id !== storyToDelete.id)
      );
      setStories((prev) =>
        prev.filter((story) => story.id !== storyToDelete.id)
      );

      toast.success("História excluída com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir história:", error);
      toast.error("Erro ao excluir história. Tente novamente.");
    } finally {
      setStoryToDelete(null);
      setLoadingStories(false);
    }
  }
  async function saveStory(title: string, content: string) {
    if (!authContext?.user) {
      toast.error("Você precisa estar logado para salvar uma história.");
      return;
    }

    if (title.trim() === "" || content.trim() === "") {
      toast.error("Preencha o título e o conteúdo da história.");
      return;
    }

    setLoadingStories(true);

    try {
      const newStory = {
        uid: authContext.user.uid,
        authorName: authContext.user.name,
        title,
        content,
        createdAt: serverTimestamp(),
        published: false,
      };

      const docRef = await addDoc(collection(db, "stories"), newStory);

      const storyWithId: StoryInterface = {
        ...newStory,
        id: docRef.id,
        createdAt: new Date(),
      };

      setMyStories((prevStories) => [storyWithId, ...prevStories]);
      setStories((prevStories) => [storyWithId, ...prevStories]);

      toast.success("História salva com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar história:", error);
      toast.error("Erro ao salvar história. Tente novamente.");
    } finally {
      setLoadingStories(false);
    }
  }

  async function publishStory(title: string, content: string) {
    if (!authContext?.user) {
      toast.error("Você precisa estar logado para publicar uma história.");
      return;
    }

    if (title.trim() === "" || content.trim() === "") {
      toast.error("Preencha o título e o conteúdo da história.");
      return;
    }

    setLoadingStories(true);

    try {
      const newStory = {
        uid: authContext.user.uid,
        authorName: authContext.user.name,
        title,
        content,
        createdAt: serverTimestamp(),
        published: true,
      };

      const docRef = await addDoc(collection(db, "stories"), newStory);

      const storyWithId: StoryInterface = {
        ...newStory,
        id: docRef.id,
        createdAt: new Date(),
      };

      setMyStories((prevStories) => [storyWithId, ...prevStories]);
      setFeedStories((prevStories) => [storyWithId, ...prevStories]);
      setStories((prevStories) => [storyWithId, ...prevStories]);

      toast.success("História publicada com sucesso!");
    } catch (error) {
      console.error("Erro ao publicar história:", error);
      toast.error("Erro ao publicar história. Tente novamente.");
    } finally {
      setLoadingStories(false);
    }
  }

  async function loadMyStories() {
    if (!authContext?.user) return;

    setLoadingStories(true);

    try {
      const q = query(
        collection(db, "stories"),
        where("uid", "==", authContext.user.uid)
      );

      const querySnapshot = await getDocs(q);
      const storiesData = processStoriesData(querySnapshot);

      setMyStories(storiesData);
    } catch (error) {
      console.error("Erro ao carregar minhas histórias:", error);
      toast.error("Erro ao carregar suas histórias. Tente novamente.");
    } finally {
      setLoadingStories(false);
    }
  }

  async function loadFeedStories() {
    setLoadingStories(true);

    try {
      const q = query(
        collection(db, "stories"),
        where("published", "==", true)
      );

      const querySnapshot = await getDocs(q);
      const storiesData = processStoriesData(querySnapshot);

      setFeedStories(storiesData);
    } catch (error) {
      console.error("Erro ao carregar feed de histórias:", error);
      toast.error("Erro ao carregar o feed. Tente novamente.");
    } finally {
      setLoadingStories(false);
    }
  }

  function processStoriesData(
    querySnapshot: QuerySnapshot<DocumentData>
  ): StoryInterface[] {
    const storiesData: StoryInterface[] = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const story: StoryInterface = {
        id: doc.id,
        uid: data.uid,
        authorName: data.authorName,
        title: data.title,
        content: data.content,
        published: data.published,
        createdAt:
          data.createdAt instanceof Timestamp
            ? data.createdAt.toDate()
            : new Date(),
      };
      storiesData.push(story);
    });

    return storiesData.sort((a, b) => {
      const dateA = a.createdAt instanceof Date ? a.createdAt : new Date();
      const dateB = b.createdAt instanceof Date ? b.createdAt : new Date();
      return dateB.getTime() - dateA.getTime();
    });
  }

  return (
    <StoryContext.Provider
      value={{
        stories,
        myStories,
        feedStories,
        loadingStories,
        saveStory,
        publishStory,
        loadMyStories,
        loadFeedStories,
        deleteStory,
        setStoryToDelete,
        storyToDelete,
      }}
    >
      {children}
    </StoryContext.Provider>
  );
};

export default StoryProvider;
