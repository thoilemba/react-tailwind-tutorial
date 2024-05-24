export default function Profile() {
    return (
        <img
          src="https://i.imgur.com/MK3eW3Am.jpg"
          alt="Katherine Johnson"
        />
    );
}

export function Gallery() {
  return (
    <section>
      <p>
        This component used the Profile component:
      </p>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

export function Hello() {
    return (
      <h3>Hello World - This is a simple component.</h3>
    );
}

export function Avatar() {
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';
  return (
    <img
      className="avatar"
      src={avatar}
      alt={description}
    />
  );
}

export function TodoList() {
  const name = 'Gregorio Y. Zara';
  return (
    <h3>{name}'s To Do List</h3>
  );
}