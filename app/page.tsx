import CV from '@/data/cv.json'
import {ResumeBlock} from "@/components/ResumeBlock";
import {ResumeAvatar} from "@/components/ResumeAvatar";
import {EmploymentHistory} from "@/components/EmploymentHistory";

export default function Home() {
    return (
        <main className="container mx-auto p-24 print:p-12">
            <div className="flex items-center pb-8">
                <div className="mr-32 w-60 h-60 shrink-0 print:w-40 print:h-40 print:mr-9">
                    <ResumeAvatar src={CV.basics.image} name={CV.basics.name}/>
                </div>
                <div>
                    <div className="text-4xl">{CV.basics.name}</div>
                    <div className="text-2xl pb-8">{CV.basics.label}</div>
                </div>
            </div>
            <ResumeBlock title="About">
                <div className={'text-justify'}>{CV.basics.summary}</div>
            </ResumeBlock>
            <div className="grid grid-cols-[340px_auto] gap-8 print:grid-cols-[5cm_auto]">
                <aside>
                    <ResumeBlock title="Contacts">
                        {CV.basics.contacts.map((contact, index) => (
                            <div key={index}>{contact}</div>
                        ))}
                    </ResumeBlock>
                    <ResumeBlock title="Skills">
                        <div>{CV.skills}</div>
                    </ResumeBlock>
                    <ResumeBlock title="Education">
                        {CV.education.map((education, index) => (
                                <div key={index}>
                                    <div>{education.institution}</div>
                                    <div>{education.degree}</div>
                                    <div>{education.years}</div>
                                </div>
                            )
                        )}
                    </ResumeBlock>
                    <ResumeBlock title="Languages">
                        {CV.languages.map(lang => lang.language).join(', ')}
                    </ResumeBlock>
                    <ResumeBlock title="Links">
                        <ul className={"print:hidden"}>
                            {CV.links.map((link) => (
                                <li key={link.name}><a className={'hover:underline'} target="_blank"
                                                        href={link.url}>{link.name}</a></li>
                            ))}
                        </ul>
                        <ul className={"hidden print:block break-words"}>
                            {CV.links.map((link) => (
                                <li key={link.name}>{link.name} - <a className={'hover:underline'} target="_blank"
                                                        href={link.url}>{link.url}</a></li>
                            ))}
                        </ul>
                    </ResumeBlock>
                </aside>
                <main>
                    <ResumeBlock title="Employment history">
                        <EmploymentHistory/>
                    </ResumeBlock>
                </main>
            </div>
        </main>
    )
}
