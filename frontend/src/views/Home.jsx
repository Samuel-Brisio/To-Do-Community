import React from 'react'
import ListGrid from "../components/layout/ListGrid";
import AddList from '../components/AddListForm';

function Home() {
    return (
        <>
            <div>
                <AddList placeholder="Nova lista..." size="lg" />
                <ListGrid />
            </div>
        </>
    )
}

export default Home