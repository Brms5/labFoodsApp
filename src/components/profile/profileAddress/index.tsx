import React from "react";
import {
  ProfileAddressContainer,
  ProfileAddressInformation,
  ProfileEdit,
} from "./style";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Profile } from "@/interfaces/profile/interface";
import { useRouter } from "next/router";

interface ProfileAddress {
  profile: Profile;
}

function ProfileAddress({ profile }: ProfileAddress) {
  const router = useRouter();

  return (
    <ProfileAddressContainer>
      <ProfileAddressInformation>
        <p>Endereço cadastrado</p>
        <p>{profile.address}</p>
      </ProfileAddressInformation>
      <ProfileEdit>
        <button
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => router.push("/perfil/addressUpdate")}
        >
          <ModeEditIcon />
        </button>
      </ProfileEdit>
    </ProfileAddressContainer>
  );
}

export default ProfileAddress;
