import React from "react";
import { ProfileAccountDiv, ProfileAccountEdit } from "./style";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Profile } from "@/interfaces/profile/interface";
import { useRouter } from "next/router";

interface ProfileAccount {
  profile: Profile;
}

function ProfileAccount({ profile }: ProfileAccount) {
  const router = useRouter();

  return (
    <ProfileAccountDiv>
      <ProfileAccountEdit>
        <p>{profile.name}</p>
        <button
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => router.push("/perfil/profileUpdate")}
        >
          <ModeEditIcon />
        </button>
      </ProfileAccountEdit>
      <p>{profile.email}</p>
      <p>{profile.cpf}</p>
    </ProfileAccountDiv>
  );
}

export default ProfileAccount;
