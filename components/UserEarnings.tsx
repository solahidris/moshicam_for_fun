import { Label } from "./ui/label";
import { Card } from "./ui/card";

const UserEarnings = ({ profile }: { profile: any }) => {
  return (
    <div className="flex flex-col">
      <Label className="pb-1">User Earnings</Label>
      <div className="flex gap-2">
        <Card className="w-28 h-10 flex items-center justify-center bg-gray-100">
          ETH {profile?.balanceInEth?.toFixed(5)}
        </Card>
        <Card className="w-28 h-10 flex items-center justify-center bg-gray-100">
          USD {profile?.balanceInUsd?.toFixed(2)}
        </Card>
      </div>
    </div>
  );
};

export default UserEarnings;
