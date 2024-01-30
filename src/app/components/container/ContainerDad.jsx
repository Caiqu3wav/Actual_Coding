import ContainerRep from "./Container"
import TopicsBar from "../topicsbar/TopicsBar"

export default function ContainerDad(props) {
    return (
        <div className="flex gap-[70px] midthree:gap-[15px]">
        {props.children}
        </div>
    );
}