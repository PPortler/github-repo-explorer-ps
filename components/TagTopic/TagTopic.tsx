type TagProps = {
  label: string;
  className?: string;
};

function TagTopic({ label, className = "" }: TagProps) {
  return (
    <span
      className={[
        "rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700",
        className,
      ]
        .join(" ")
        .trim()}
    >
      #{label}
    </span>
  );
}

export default TagTopic;
