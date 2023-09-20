import { useSelector } from "react-redux"
import { IRootState, useAppDispatch } from "../../../redux/store"
import { useEffect } from "react"
import { getIndividualSpeciesActions } from "../../../redux/SpeciesSlice/SpeciesAsyncThunk"
import { useParams } from "react-router-dom"
import { speciesAction } from "../../../redux/SpeciesSlice/SpeciesSlice"


const SpeciesDetails =()=>{
    const {specificSpecies} = useSelector((state:IRootState)=>state.speciesStateData)
    const dispatch = useAppDispatch()
    const {speciesId} = useParams()
    useEffect(()=>{
        const id = Number(speciesId)
        dispatch(getIndividualSpeciesActions({id}))
        return ()=>{speciesAction.resetSpecificSpecies()}
    },[dispatch, speciesId])
    return(
        <div>
            <div>{specificSpecies.average_height}</div>
            <div>{specificSpecies.average_lifespan}</div>
            <div>{specificSpecies.classification}</div>
            <div>{specificSpecies.created}</div>
            <div>{specificSpecies.designation}</div>
        </div>
    )
}
export default SpeciesDetails