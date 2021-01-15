import React from 'react'
import Greet from './Greet'
import Message from './Message'
import Spread from './Spread'
import Destructureex from './destructureex'
import ParentComp from './ParentComp';
import UserProfile from './UserProfile';
import ControlledInput from './ControlledInput';
import Form from './Form';
import CreateUser from './CreateUser';
import DeleteUser from './DeleteUser';
import Hooksfunction from './HooksFunction';
import Stylesheet from './Stylesheet';
import RefsDemo from './Refs/RefsDemo';
import FocusInput from './Refs/FocusInput';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter'
import LifecycleA from './LifecycleA';


function Practice() {
    return (
        <div>
            <h1>practice</h1>
            <Greet name={'DivyaAppasani'} Age={20} />
            <CreateUser />
            <DeleteUser />
            <Stylesheet primary={true} />
            <FocusInput />
            <RefsDemo />
            <LifecycleA />
            <Message />
            <Destructureex />
            <ControlledInput />
            <Form />
            <Spread />
            <UserProfile />
            <ParentComp />
            <ClickCounter name={'divya'} />
            <HoverCounter />
            <Hooksfunction />
        </div>
    )
}

export default Practice
