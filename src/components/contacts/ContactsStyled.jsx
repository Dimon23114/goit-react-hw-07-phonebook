import styled from '@emotion/styled';

export const ListContacts = styled.ul`
margin: 0px;
list-style: none;
padding: 0px;
`;

export const ButtonDel = styled.button`
min-width: 100px;
margin-left: 16px;
font-size: 20px;
background-color: green;
color: #ffffff;
border: none;
border-radius: 4px;

&:hover,
&:focus {
    background-color: orange;
}
`;

export const ListItem = styled.li`
margin-bottom: 8px;
`