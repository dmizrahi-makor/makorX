import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import formDataSlice, { formDataActions } from '../store/formDataSlice';
import { StyledTextField } from './PseudoForm';
// import useDebounce from '../../hooks/useDebounce';
import { debounce } from 'lodash';

const DispatcherField = (props) => {
  // const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    console.log('dispatcher render', props.value);
  });
  const dispatch = useDispatch();

  const handleChange = async (e) => {
    console.log(e);
    e.preventDefault();
    //////redux updat
    const fieldToUpdate = {
      field: e.target.id,
      value: e.target.value,
    };
    try {
      await axios.put(
        'http://10.0.0.197:3030/api/onboarding/289334a4-50f3-11ec-be49-d08e7912923c',
        { fieldToUpdate }
      );
    } catch (err) {
      console.log(err);
    }
    dispatch(
      formDataActions.updateState({
        id: props.id,
        value: e.target.value,
      })
    );

    // axios.post('randomURLasdasdsadsad', data);
  };

  const debouncedEventHandler = useMemo(
    () => debounce(handleChange, 300),
    [] /////maybe props needed
  );

  return (
    <StyledTextField
      id={props.id}
      InputLabelProps={{
        style: { color: '#1a1616' },
      }}
      fullWidth
      onChange={debouncedEventHandler}
      label={!props.value ? props.label : ''}
      value={props.value}
    />
  );
};

export default DispatcherField;
