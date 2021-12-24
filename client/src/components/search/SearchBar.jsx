import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { userApi } from "../../api/usersApi.js";
import FriendRequestButton from "../friend_request";

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const user = useSelector((state) => state.user);

  useEffect(() => {
    const search = async () => {
      if (searchValue !== "") {
        const result = await userApi.search(searchValue, user.current.uid);
        setSearchResult(result);
      }
    };

    search();
  }, [searchValue]);

  return (
    <div>
      <input
        type="text"
        id="search"
        name="searchFriend"
        placeholder="Search for a friend! :)"
        value={searchValue}
        onChange={(e) => {
          const { value } = e.target;
          setSearchValue(value);
        }}
      />
      <p>Results:</p>
      {searchResult.map((value, key) => {
        return (
          <div key={key}>
            {value.firstName} {value.lastName} [
            <FriendRequestButton friendID={value._id} />]
          </div>
        );
      })}
    </div>
  );
};
