import { useQuery } from "react-query";

const useTask = () => {
    const { data, refetch, isLoading } = useQuery("task", () =>
        fetch(`https://assignment-manage.herokuapp.com/task`).then((res) =>
            res.json()
        )
    );
    return { data, refetch, isLoading };
};

export default useTask;
