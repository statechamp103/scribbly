import './styles.css';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import notes from './notes';

export default function App() {
  return (
    <div className="App">
      <Header />
      {notes.map((note) => (
        <Note key={note.key} title={note.title} content={note.content} />
      ))}
      <Footer />
    </div>
  );
}
