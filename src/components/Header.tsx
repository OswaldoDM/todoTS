import icon from "../assets/typescript.svg";
import CreateTodo from "./createTodo";


interface Props {
  onAddTodo: (title:string) => void
}

const Header: React.FC<Props> = ({onAddTodo}) => {
  return (
    <header>
      <h1>
        todo
        <img 
        style={{ width: "60px", height: "auto" }} 
        src={icon} 
        />
      </h1>

      <CreateTodo onAddTodo={onAddTodo}/>
    </header>
  );
};

export default Header;
