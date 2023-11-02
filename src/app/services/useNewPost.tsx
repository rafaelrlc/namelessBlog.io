import { useRouter } from "next/navigation";

const usePostService = () => {
  const { push } = useRouter();

  const cancelPost = () => {
    push("/");
  };

  const confirmPost = () => {
    push("/");
  };

  return { cancelPost, confirmPost };
};

export default usePostService;
