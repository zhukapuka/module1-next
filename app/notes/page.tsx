// notes/page.tsx

import { getNotes } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";

const Notes = async () => {
  const response = await getNotes();

  return (
    <section>
      <h1>Notes List</h1>
      {response?.notes?.length > 0 && <NoteList notes={response.notes} />}
    </section>
  );
};

export default Notes;

// import { getNotes } from "@/lib/api";

// export default async function Notes() {
//   const notes = await getNotes();
//   console.log("notes", notes);
//   return <div>Notes page</div>;
// }
// app/notes/page.tsx
// notes/page.tsx

// import { getNotes } from "@/lib/api";
// import NoteList from "@/components/NoteList/NoteList";

// const Notes = async () => {
//   const response = await getNotes();

//   return (
//     <section>
//       <h1>Notes List</h1>
//       {response?.notes?.length > 0 && <NoteList notes={response.notes} />}
//     </section>
//   );
// }

// export default Notes;
