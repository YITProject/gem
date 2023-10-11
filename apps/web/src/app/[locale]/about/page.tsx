"use client";
import { useEffect, useState } from "react";
import classes from "./about.module.css";

const fetchURL = "https://api.github.com/repos/YITProject/gem/contributors";
interface Contributor {
  login: string;
  avatar_url: string;
  url: string;
}
export default function About() {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  useEffect(() => {
    void fetch(fetchURL)
      .then((res) => res.json())
      .then((data: Contributor[]) => {
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
              <img alt={user.login} src={user.avatar_url} />
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
