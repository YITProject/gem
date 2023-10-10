"use client";
import { useEffect, useState } from "react";
import classes from "./about.module.css";
const fetchURL = "https://api.github.com/repos/YITProject/gem/contributors";
type contributor = {
  login: string;
  avatar_url: string;
  url: string;
};
export default function About() {
  const [contributors, setContributors] = useState<contributor[]>([]);
  useEffect(() => {
    fetch(fetchURL)
      .then((res) => res.json())
      .then((data: contributor[]) => {
        setContributors(data);
      });
  });
  return (
    <div className={classes.page}>
      <h1>BSD 2-Clause License - &copy;{new Date().getFullYear()} GemGames.</h1>
      <h2>Contributors:</h2>
      <div className={classes.users}>
        {contributors.map((user) => {
          return (
            <a href={user.url} key={user.login}>
              <img src={user.avatar_url} alt={user.login} />
              <h3>{user.login}</h3>
            </a>
          );
        })}
      </div>
      <div style={{ margin: "1em" }}>
        <p> Data resource from </p>
        <a href={fetchURL}>{fetchURL}</a>
      </div>
    </div>
  );
}
