import React, { useState } from "react";
import TakeNote from "./TakeNote";
import NoteList from "./NoteList";
import { initialNote } from "../utils/data";
import Header from "./Header";
import SideMenu from "./SideMenu";

import { useNotes } from "../context/GlobalContext";


export default function Layout() {

  const { closeTakeNote, closePalette } = useNotes()

  function handleClick() {
    closeTakeNote()
    closePalette()
  }

  return (
    <div onClick={handleClick}>
      <Header />
      <SideMenu />
      <main
        className="pt-14 sm:pt-24 mb-4 pr-2 pl-[80px] sm:pl-[88px] flex items-center flex-col gap-5"
      >
        <TakeNote />
        <NoteList />
      </main>
    </div>
  );
}
