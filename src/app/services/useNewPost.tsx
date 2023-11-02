import { useRouter } from "next/navigation";

const usePostService = () => {
  const router = useRouter();

  const cancelPost = () => {
    router.push("/");
  };

  const confirmPost = () => {
    router.push("/");
  };

  return { cancelPost, confirmPost };
};

export default usePostService;
