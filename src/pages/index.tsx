//import { trpc } from "@/utils/trpc";
import type React from "react";
import { Box, Flex } from "@chakra-ui/react";
//import { inferQueryResponse } from "./api/trpc/[trpc]";
import { links } from "../components/data";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { usePlausible } from "next-plausible";
import { Container } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";


const btn =
  "inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm font-medium rounded-full text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";

export default function Home() {

  return (
    <div className="test">
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Dojo</th>
            <th>Friends</th>
            <th>Rivals</th>
            <th>pic</th>
            <th>bio</th>
          </tr>
          {links.EFK.sensei.map((item, key) => {
            return (
              <tr key={key}>
                <td>{item.name}</td>
                <td>{item.dojo}</td>
                <td>{item.friends}</td>
                <td>{item.rivals}</td>
                <td><img src={item.pic} width="100%" height="100%" alt={item.name} /></td>
                <td>{item.bio}</td>
              </tr>
            )
          })}
          {links.EFK.students.map((item, key) => {
            return (
              <tr key={key}>
                <td>{item.name}</td>
                <td>{item.dojo}</td>
                <td>{item.friends}</td>
                <td>{item.rivals}</td>
                <td><img src={item.pic} width="100%" height="100%" alt={item.name} /></td>
                <td>{item.bio}</td>
              </tr>
            )
          })}
          {links.CK.sensei.map((item, key) => {
            return (
              <tr key={key}>
                <td>{item.name}</td>
                <td>{item.dojo}</td>
                <td>{item.friends}</td>
                <td>{item.rivals}</td>
                <td><img src={item.pic} width="100%" height="100%" alt={item.name} /></td>
                <td>{item.bio}</td>
              </tr>
            )
          })}
          {links.CK.students.map((item, key) => {
            return (
              <tr key={key}>
                <td>{item.name}</td>
                <td>{item.dojo}</td>
                <td>{item.friends}</td>
                <td>{item.rivals}</td>
                <td><img src={item.pic} width="100%" height="100%" alt={item.name} /></td>
                <td>{item.bio}</td>
              </tr>
            )
          })}
          {links.MD.sensei.map((item, key) => {
            return (
              <tr key={key}>
                <td>{item.name}</td>
                <td>{item.dojo}</td>
                <td>{item.friends}</td>
                <td>{item.rivals}</td>
                <td><img src={item.pic} width="100%" height="100%" alt={item.name} /></td>
                <td>{item.bio}</td>
              </tr>
            )
          })}
          {links.MD.students.map((item, key) => {
            return (
              <tr key={key}>
                <td>{item.name}</td>
                <td>{item.dojo}</td>
                <td>{item.friends}</td>
                <td>{item.rivals}</td>
                <td><img src={item.pic} width="100%" height="100%" alt={item.name} /></td>
                <td>{item.bio}</td>
              </tr>
            )
          })}
          {links.WC.map((item, key) => {
            return (
              <tr key={key}>
                <td>{item.name}</td>
                <td>{item.dojo}</td>
                <td>{item.friends}</td>
                <td>{item.rivals}</td>
                <td><img src={item.pic} width="100%" height="100%" alt={item.name} /></td>
                <td>{item.bio}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};