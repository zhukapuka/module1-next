import { Note } from "@/lib/api";
import NoteItem from "../NoteItem/NoteItem";
import styles from "./NoteList.module.css";

type Props = {
  notes: Note[];
};

const NoteList = ({ notes }: Props) => {
  return (
    <ul className={styles.list}>
      {notes.map((note) => (
        <li key={note.id} className={styles.listItem}>
          <NoteItem item={note} />
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
