import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Table, Menu, Dropdown } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text, record) => (
      <Dropdown
        overlay={
          <Menu>
            {text.contextmenu.map(data => (
              <Menu.Item key={data}>{data}</Menu.Item>
            ))}
          </Menu>
        }
        trigger={["contextMenu"]}
      >
        <a>{text.nameText}</a>
      </Dropdown>
    )
  },
  {
    title: "Age",
    dataIndex: "age",
    render: text => (
      <Dropdown
        overlay={
          <Menu>
            {text.contextmenu.map(data => (
              <Menu.Item key={data}>{data}</Menu.Item>
            ))}
          </Menu>
        }
        trigger={["contextMenu"]}
      >
        <span>{text.ageString}</span>
      </Dropdown>
    )
  },
  {
    title: "Address",
    dataIndex: "address",
    render: text => (
      <Dropdown
        overlay={
          <Menu>
            {text.contextmenu.map(data => (
              <Menu.Item key={data}>{data}</Menu.Item>
            ))}
          </Menu>
        }
        trigger={["contextMenu"]}
      >
        <span>{text.addString}</span>
      </Dropdown>
    )
  }
];
const data = [
  {
    key: "1",
    name: {
      nameText: "John Brown",
      contextmenu: ["The Rolling stone", "pink floyd", "queen"]
    },
    age: {
      ageString: 32,
      contextmenu: ["smashing punpkins", "The Rembrandts", "friends"]
    },
    address: {
      addString: "New York No. 1 Lake Park",
      contextmenu: ["dance monkey", "radioactive", "titanium"]
    }
  },
  {
    key: "2",
    name: {
      nameText: "Jim Green",
      contextmenu: ["Imagine dragon", "cold play", "clean bandit"]
    },
    age: {
      ageString: 42,
      contextmenu: ["rockabye", "creep", "counting stars"]
    },
    address: {
      addString: "London No. 1 Lake Park",
      contextmenu: ["thunderclouds", "fifth harmony", "rozzane"]
    }
  },
  {
    key: "3",

    name: {
      nameText: "Joe Black",
      contextmenu: ["diamonds", "some context", "Billionaire"]
    },
    age: {
      ageString: 32,
      contextmenu: ["shield", "hydra", "tadada"]
    },
    address: {
      addString: "Sidney No. 1 Lake Park",
      contextmenu: ["yagami", "ryuk", "scherlok", "watson"]
    }
  },
  {
    key: "4",
    name: {
      nameText: "Disabled User",
      contextmenu: ["some conext1", "some conext2"]
    },

    age: {
      ageString: 99,
      contextmenu: ["EXO", "BTS"]
    },

    address: {
      addString: "Sidney No. 1 Lake Park",
      contextmenu: ["Growl", "Obssession", "Tempo"]
    }
  }
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: record => ({
    disabled: record.name === "Disabled User", // Column configuration not to be checked
    name: record.name
  })
};

ReactDOM.render(
  <Table rowSelection={rowSelection} columns={columns} dataSource={data} />,
  document.getElementById("container")
);
