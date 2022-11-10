import { Label, FilteredInput, Span} from "../ContactsList/ContactList.styled";
import { useDispatch } from "react-redux";
import { filteredContacts } from "redux/filterSlise";

export default function Filter() {
    
    const dispatch = useDispatch();

       const handleChange = (e) => {
           const { value } = e.target;
           dispatch(filteredContacts(value));
    };
        return (
        <>
            <Label htmlFor="filter">
                <Span>Find contacts by name</Span>
                <FilteredInput type="text" name="filter"  onChange={handleChange} />
                
            </Label>
        </>
    );
};

