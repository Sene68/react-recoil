import React from "react";
import styled, { css } from 'styled-components';
import { useRecoilState } from "recoil";
import { todoListFilterState } from "../recoil_state";

const FilterForm = styled.div`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 12px;
  padding-right: 32px;
  padding-bottom: 12px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Select = styled.select`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

export default function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <>
      <FilterForm>
        <Select value={filter} onChange={updateFilter}>
          <option value="Show All">All</option>
          <option value="Show Completed">Completed</option>
          <option value="Show Uncompleted">Uncompleted</option>
        </Select>
      </FilterForm>
      <p></p>
    </>
  );
}