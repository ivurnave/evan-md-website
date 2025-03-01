import { Colors } from "@/colors"

export const HeaderDecoration = () => <div className="flex flex-row mb-2">
    <HeaderDecorationBlock color={Colors.yellow}/>
    <HeaderDecorationBlock color={Colors.green}/>
    <HeaderDecorationBlock color={Colors.coral}/>
    <HeaderDecorationBlock color={Colors.blue}/>
</div>
export const HeaderDecorationBlock = (props: {color: string}) => 
    <div style={{height: 30, width: 30, backgroundColor: props.color}}></div>