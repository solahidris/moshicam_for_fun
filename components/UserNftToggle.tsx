import { Button } from "./ui/button";

interface UserNftToggleProps {
  showCreatedNft: boolean;
  setShowCreatedNft: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserNftToggle: React.FC<UserNftToggleProps> = ({
  showCreatedNft,
  setShowCreatedNft,
}) => {
  return (
    <div className="flex gap-4">
      <Button
        className={`${showCreatedNft ? "bg-black" : "bg-gray-300"}`}
        onClick={() => setShowCreatedNft(true)}
      >
        Created
      </Button>
      <Button
        className={`${showCreatedNft ? "bg-gray-300" : "bg-black"}`}
        onClick={() => setShowCreatedNft(false)}
      >
        Collected
      </Button>
    </div>
  );
};

export default UserNftToggle;
