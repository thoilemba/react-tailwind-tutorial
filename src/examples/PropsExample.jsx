export function getImageUrl(person, size = 's') {
  return (
    'https://i.imgur.com/' +person.imageId +size +'.jpg'
  );
}

// this is destructuring props
function Avatar({ person, size }) {
  return (
    <img

      className="rounded-full"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
// OR
// function Avatar(props) {
//   let person = props.person;
//   let size = props.size;
//   // ...
// }

function Card({ children }) {
  return (
    <div className="rounded-3xl bg-cyan-400">
      {children}
    </div>
  );
}

export default function Profile() {
  return (
    <div>
      <Card>
        <Avatar
        size={180}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      </Card>

      <Avatar
        size={150}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={100}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </div>
  );
}


