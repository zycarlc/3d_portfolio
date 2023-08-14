import { Button, Tooltip } from "flowbite-react"

import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"

const Tech = ({ result, isLoading }) => {
    return (
        <div className="flex flex-row flex-wrap justify-center gap-10">
            {result.skills?.map((skill, i) => {
                return (
                    <Tooltip content={skill} key={skill}>
                        <div className="w-28 h-28">
                            {/* <p className="text-white">{skill}</p> */}
                            {/* <img src={technologies[skill]} alt="" /> */}
                            <BallCanvas icon={technologies[skill]} />
                        </div>
                    </Tooltip>
                )
            })}
        </div>
    )
}

export default SectionWrapper(Tech, "tech")
