type PropsType = {
  id: string
};

export default function Question({ id }: PropsType) {
  return (
    <div>
      <h1>Question Page</h1>
      <p>{id}</p>
    </div>
  );
}

// getStatiProps
export async function getServerSideProps(context:any) {
  const {id = ''} = context.params;
  return { props: { id } };
}