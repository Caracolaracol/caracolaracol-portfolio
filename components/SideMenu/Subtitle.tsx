
interface childrenProps {
    children: JSX.Element | String;
}

export default function Subtitle({children}:childrenProps) {
    return (
        <div className="my-2">
            <div className="w-[95%] border-b-[1px] border-cerise dark:border-cerise border-opacity-20 dark:border-opacity-20">
                <h2 className="font-chrono text-[1.7rem] antialiased leading-none tracking-wider text-cerise dark:text-cerise">{children}</h2>
            </div>
        </div>
    )
}