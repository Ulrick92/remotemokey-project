import { RiCamera2Fill } from "react-icons/ri";
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { ChangeEvent } from "react";

type UploadAvatarProps = {
	handleImageSelect: (e: ChangeEvent<HTMLInputElement>) => void;
	imagePreview: string | ArrayBuffer | null;
};

export const UploadAvatar = ({
	handleImageSelect,
	imagePreview,
}: UploadAvatarProps) => {
	return (
		<div className="flex items-center gap-5">
			<label
				htmlFor="upload"
				className="inline-block bg-primary hover:bg-primary-400 text-white rounded px-[18px] py-[15px] text-caption2 font-medium cursor-pointer animate"
			>
				<div className="flex items-center gap-2">
					<RiCamera2Fill />
					<span>Choisir un fichier</span>
				</div>
				<input
					type="file"
					name="upload"
					id="upload"
					className="hidden"
					onChange={handleImageSelect}
				/>
			</label>
			<Avatar
				size="extra-large"
				alt=""
				src={imagePreview ? `${imagePreview}` : "/assets/svg/camera.svg"}
			/>
		</div>
	);
};
