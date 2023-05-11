import React from "react";
import Member from "./Member";
import { listNember, MemberContent } from "../constant/member_constant";

type Props = {};

const SlideMember = (props: Props) => {
  const renderListMember = () => {
    return listNember.map((item: MemberContent, index: number) => {
      return (
        <Member
          imgSrc={item.imgSrc}
          author={item.author}
          logo={item.logo}
          content={item.content}
          key={index}
        />
      );
    });
  };
  return (
    <div className="slideMember">
      <div className="slide-content">
        {renderListMember()}
      </div>
    </div>
  );
};

export default SlideMember;
