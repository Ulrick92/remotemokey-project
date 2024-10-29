import { CtaView } from "@/ui/design-system/cta/cta.view";
import { CoderMonkeysSlackView } from "./coders-monkeys-slack/coder-monkeys-slack.view";
import { CurrentCourseCtaView } from "./current-course-cta/current-course-cta.view";
import { FeaturedView } from "./featured/featured.view";
import { HeroTopView } from "./hero-top/hero-top.view";
import { HighlightList } from "./highlight-list/highlight-list.view";

export const LandingPageView = () => {
	return (
		<>
			<HeroTopView />
			<FeaturedView />
			<CoderMonkeysSlackView />
			<CurrentCourseCtaView />
			<HighlightList />
			<CtaView />
		</>
	);
};
