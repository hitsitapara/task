import React, { useEffect, useState } from "react";
import { getTask } from "../api/task";

import { Table } from "antd";

const dummyTaskList = [
  {
    id: 1,
    title: "Test Title",
    description: "Test description",
    priority: "high",
    deadline: new Date(),
    isCompleted: false,
  },
  {
    id: 2,
    title: "Test Title",
    description: "Test description",
    priority: "high",
    deadline: new Date(),
    isCompleted: false,
  },
  {
    id: 3,
    title: "Test Title",
    description: "Test description",
    priority: "high",
    deadline: new Date(),
    isCompleted: true,
  },
  {
    id: 1,
    title: "Test Title",
    description: "Test description",
    priority: "high",
    deadline: new Date(),
    isCompleted: false,
  },
  {
    id: 2,
    title: "Test Title",
    description: "Test description",
    priority: "high",
    deadline: new Date(),
    isCompleted: false,
  },
  {
    id: 3,
    title: "Test Title",
    description: "Test description",
    priority: "high",
    deadline: new Date(),
    isCompleted: true,
  },
  {
    id: 1,
    title: "Test Title",
    description: "Test description",
    priority: "high",
    deadline: new Date(),
    isCompleted: false,
  },
  {
    id: 2,
    title: "Test Title",
    description: "Test description",
    priority: "high",
    deadline: new Date(),
    isCompleted: false,
  },
  {
    id: 3,
    title: "Test Title",
    description: "Test description",
    priority: "high",
    deadline: new Date(),
    isCompleted: true,
  },
  {
    id: 1,
    title: "Test Title",
    description: "Test description",
    priority: "high",
    deadline: new Date(),
    isCompleted: false,
  },
  {
    id: 2,
    title: "Test Title",
    description: "Test description",
    priority: "high",
    deadline: new Date(),
    isCompleted: false,
  },
  {
    id: 3,
    title: "Test Title",
    description: "Test description",
    priority: "high",
    deadline: new Date(),
    isCompleted: true,
  },
  {
    id: 1,
    title: "Test Title",
    description: "Test description",
    priority: "high",
    deadline: new Date(),
    isCompleted: false,
  },
  {
    id: 2,
    title: "Test Title",
    description: "Test description",
    priority: "high",
    deadline: new Date(),
    isCompleted: false,
  },
  {
    id: 3,
    title: "Test Title",
    description: "Test description",
    priority: "high",
    deadline: new Date(),
    isCompleted: true,
  },

];

function Task() {
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [pageConfig, setPageConfig] = useState({
    pageSize: 10,
    pageNumber: 1,
  });

  const getTaskList = async () => {
    try {
      const result = await getTask(pageConfig);
      if (result) {
        setTaskList(result);
      }
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTaskList();
    return () => {
      setTaskList([]);
      setLoading(false);
      setPageConfig({
        pageSize: 10,
        pageNumber: 1,
      });
      setError("");
    };
  }, []);

  if (loading) {
    return <span>Loading...</span>;
  }

  const columns = [
    {
      title: "Status",
      key: "status",
      render: (record) => {
        return (
          <div>
            {record.isCompleted ? (
              <span className="text-green-500">Completed</span>
            ) : (
              <span className="text-yellow-500">Pending</span>
            )}
          </div>
        );
      },
    },
    { title: "Title", key: "title", dataIndex: "title" },
    {
      title: "Description",
      key: "description",
      dataIndex: "description",
    },
    {
      title: "Priority",
      key: "priority",
      dataIndex: "priority",
    },
    {
      title: "Deadline",
      key: "deadline",
      render: (record) => {
        return <span>{record.deadline.toISOString()}</span>;
      },
    },

  ];



  return (
    <div className="m-10 grid grid-col-5 gap-4">
      <Table
        dataSource={dummyTaskList}
        columns={columns}
        rowKey={"id"}
        // onChange={(pagination)=>{handlePageChange({pagination})}}
      />
    </div>
  );
}

export default Task;
