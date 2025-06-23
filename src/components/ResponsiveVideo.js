export default function ResponsiveVideo({src, ...props}) {
  return (
    <div className="videoContainer">
      <iframe src={src} {...props} />
    </div>
  );
}