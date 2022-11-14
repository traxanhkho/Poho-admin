import Avatar from "./Avatar";

function DescriptionListAvatar() {
  return (
    <div className="inline-flex gap-2">
      <Avatar
        avtUrl={
          "https://nld.mediacdn.vn/291774122806476800/2022/3/29/photo-1-1648550112535397905915.jpeg"
        }
      />
      <div className="inline-flex flex-col">
        <h3>Ngọc Thu</h3>
        <p>Người đại diện</p>
      </div>
    </div>
  );
}

export default DescriptionListAvatar;
