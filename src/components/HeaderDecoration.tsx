import { Colors } from "@/colors"

// rounded-full overflow-hidden drop-shadow-lg
export const HeaderDecoration = () => <div className="flex flex-row mb-2 w-4/5 mt-2 self-center rounded-full overflow-hidden drop-shadow-sm">
    <HeaderDecorationBlock color={Colors.base.yellow} />
    <HeaderDecorationBlock color={Colors.base.green} />
    <HeaderDecorationBlock color={Colors.base.coral} />
    <HeaderDecorationBlock color={Colors.base.blue} />
</div>
export const HeaderDecorationBlock = (props: { color: string }) =>
    <div className="w-1/4" style={{ height: 10, backgroundColor: props.color }}></div>