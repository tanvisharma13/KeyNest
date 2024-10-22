import React from "react";
import { useRef, useState, useEffect } from "react";

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const showPassword = () => {
    passwordRef.current.type="text"
    if (ref.current.src.includes("/slasheye.png")) {
      ref.current.src = "/openeye.png"
      passwordRef.current.type="password"
      
    } else {
      ref.current.src = "/slasheye.png"
      passwordRef.current.type="text"
    }
  };

  const savepassword = () => {
    setPasswordArray([...passwordArray, form]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
    console.log([...passwordArray, form]);
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className=" mycontainer">
        <h1
          className="text-4xl font-bold text-center"
          style={{ color: "#001d3d" }}
        >
          KeyNest
        </h1>
        <p className="text-center text-lg" style={{ color: "#001d3d" }}>
          {" "}
          Your own password manager
        </p>

        <div className=" flex flex-col p-4 text-black gap-8 items-center ">
          <input
            value={form.site}
            onChange={handleChange}
            className="rounded-lg border border-blue-950 w-full p-4 py-1"
            type="text"
            name="site"
            id=""
            placeholder="Enter website URL"
          />
          <div className="flex w-full justify-between gap-8">
            <input
              value={form.username}
              onChange={handleChange}
              className="rounded-lg border border-blue-950 w-full p-4 py-1"
              type="text"
              name="username"
              id=""
              placeholder="Enter Username"
            />

            <div className="relative">
              <input ref={passwordRef}
                value={form.password}
                onChange={handleChange}
                className="rounded-lg border border-blue-950 w-full p-4 py-1"
                type="password"
                name="password"
                id=""
                placeholder="Enter Password"
              />
              <span
                className="absolute right-[3px] top-[4px] cursor-pointer"
                onClick={showPassword}
              > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">  
              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
            </svg>
                <img
                  ref={ref}
                  className="p-1"
                  width={26}
                  src="/openeye.png"
                  alt="eye"
                ></img>
              </span>
            </div>
          </div>
          <button
            onClick={savepassword}
            className="flex justify-center items-center bg-blue-950 text-white px-8 py-2 rounded-md w-fit gap-2"
          >
            <lord-icon
              src="https://cdn.lordicon.com/hqymfzvj.json"
              trigger="hover"
              colors="primary:#ffffff"
            >
              {" "}
            </lord-icon>
            Add Password
          </button>
        </div>
        <div className="password">
          <h2 className="font-bold text-2xl py-4">Your Password</h2>
          {passwordArray.length === 0 && <div> No passwords to show  </div>}
          {passwordArray.length != 0 && 
          <table className="table-auto w-full rounded-md overflow-hidden">
            <thead className="bg-blue-950 text-white">
              <tr>
                <th className="py-2">Site</th>
                <th className="py-2">Username</th>
                <th className="py-2">Password</th>
              </tr>
            </thead>
            <tbody className="bg-blue-50">
              {passwordArray.map((item,index) => {
                return <tr key={index}>
                <td className=" py-2 border border-white text-center w-32"><a href={item.site} target="_blank">{item.site} </a>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
</svg>
                </td>
                <td className=" py-2 border border-white text-center w-32">{item.username}</td>
                <td className=" py-2 border border-white text-center w-32">{item.password}</td>
              </tr>
            })}
             
            </tbody>
          </table>}
        </div>
      </div>
    </>
  );
};

export default Manager;
