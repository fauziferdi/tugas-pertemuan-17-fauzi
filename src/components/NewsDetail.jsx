export default function NewsDetail({ detail }) {
  return (
    <div className="App">
      <h1>{detail.title}</h1>
      <div>
        {detail.content.map((item, index) => {
          return item.startsWith("http") ? (
            <img width={700} key={index} src={item} alt=""></img>
          ) : (
            <p key={index}>{item}</p>
          );
        })}
      </div>
    </div>
  );
}
