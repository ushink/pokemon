import { Image, Table, Tag, Typography } from "antd";
import { mockPokemonData } from "../mock";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (el) => <Typography.Text copyable>{el}</Typography.Text>,
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    filters: [
      { text: "Fire", value: "Fire" },
      { text: "Water", value: "Water" },
      { text: "Electric", value: "Electric" },
    ],
    onFilter: (value, item) => item.type.includes(value),
  },
  {
    title: "Abilities",
    dataIndex: "abilities",
    key: "abilities",
    render: (_, { abilities }) => (
      <>
        {abilities.map((tag) => {
          let color = tag.length > 10 ? "geekblue" : "green";
          if (tag === "Torrent") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "FleeRate",
    dataIndex: "fleeRate",
    key: "fleeRate",
    sorter: (a, b) => a.fleeRate - b.fleeRate,
    render: (el) => `${el} %`,
  },
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    render: (img) => <Image src={img} alt="pokemon" width={80} />,
  },
];

const dataSource = mockPokemonData.map((el) => ({ ...el, key: el.id }));
export function TablePokemon({ items }) {
  return (
    <>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={{
          pageSize: items,
        }}
      />
    </>
  );
}
