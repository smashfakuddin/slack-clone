import styled from 'styled-components';
import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import CreateIcon from '@material-ui/icons/Create'
import SidebarOption from './SidebarOption';
import { Add, Apps, BookmarkBorder, Drafts, ExpandLess, ExpandMore, FileCopy, Inbox, InsertComment, PeopleAlt } from '@material-ui/icons';
import { useCollection } from 'react-firebase-hooks/firestore';
import { auth, db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Sidebar = () => {
    const [channels, loading, error] = useCollection(db.collection("rooms"));
    const [user] = useAuthState(auth);

    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>Dev HQ</h2>
                    <h3>
                        <FiberManualRecordIcon />
                    {user?.displayName}
                    </h3>
                </SidebarInfo>
                <CreateIcon />
            </SidebarHeader>

            <SidebarOption Icon={InsertComment} title='Threads' />
            <SidebarOption Icon={Inbox} title='Mentions & Reactions' />
            <SidebarOption Icon={Drafts} title='Saved items' />
            <SidebarOption Icon={BookmarkBorder} title='Channel browser' />
            <SidebarOption Icon={PeopleAlt} title='People & user groups' />
            <SidebarOption Icon={Apps} title='Apps' />
            <SidebarOption Icon={FileCopy} title='file browser' />
            <SidebarOption Icon={ExpandLess} title='Show less' />
            <hr />
            <SidebarOption Icon={ExpandMore} title='Channels' />
            <hr />
            <SidebarOption Icon={Add} addChannelOption title='Add Channel' />

            {channels?.docs.map(doc =>
                <SidebarOption
                    key={doc.id}
                    id={doc.id}
                    title={doc.data().name}
                />
            )}
        </SidebarContainer>
    );
};

export default Sidebar;

const SidebarContainer = styled.div`
    background-color: var(--slack-color);
    overflow: scroll;
    color: white;
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 240px;
    margin-top: 60px;
    >hr{
        margin: 10px 0;
        border: 1px solid #49274b;
    }
    ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
}
`;

const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding-bottom: 10px;
    padding:13px;
    >.MuiSvgIcon-root{
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
}
`;

const SidebarInfo = styled.div`

    flex: 1;
    >h2{
        font-size:15px;
        font-weight: 900;
        margin-bottom: 5px;

    }
    >h3{
        display:flex;
        font-size: 13px;
        font-weight: 500;
        align-items: center;
    }
    >h3>.MuiSvgIcon-root{
        font-size: 13px;
        margin-top: 1px;
        margin-right:2px;
        color: green;
    }
`;