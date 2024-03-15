export function ResumeBlock({title, children}: { title: string, children: React.ReactNode }) {
    return (
        <div className="pb-8">
            <div className="text-2xl pb-2">{title}</div>
            <div className="">
                {children}
            </div>
        </div>
    );
}