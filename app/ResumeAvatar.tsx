export function ResumeAvatar({src, name}: { src: string, name: string }) {
    return (
           <img src={src} alt={name} className="w-full h-full rounded-full object-cover"/>
    );
}
