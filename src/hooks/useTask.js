import { useQuery } from "react-query";

const useTask = () => {
    const { data, refetch, isLoading } = useQuery("task", () =>
        fetch(`http://localhost:5000/task`).then((res) => res.json())
    );
    return { data, refetch, isLoading };
};

export default useTask;
