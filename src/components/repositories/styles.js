import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export const WrapperTabs = styled(Tabs)`
    font-size: 16px;
    width: 100%;
    margin-top: 20px;
`;

export const WrapperTabList = styled(TabList)`
    list-style-type: none;
    padding: 4px;
    display: flex;
    margim: 0;
    font-style: italic;
`;

WrapperTabList.tabsRole = 'TabList';

export const WrapperTab = styled(Tab)`
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border: 1px solid #ccc;
    padding: 16px;
    user-select: none;
    cursor: pointer;
    background-color: white;
    color: black;
    
    &.focus {
        outline: none;  
    }

    &.is-selected {
        border: 2px solid #41356b;
        border-bottom: none;
    }
`;

WrapperTab.tabsRole = 'Tab';

export const WrapperTabPanel = styled(TabPanel)`
    padding: 18px;
    border: 1px solid '#ccc';
    display: none;
    margin-top: -5px;
    background-color: white;
    color: black;
    
    &.is-selected {
        display: block;
    }
`;

WrapperTabPanel.tabsRole = 'TabPanel';

export const WrapperList = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`;
