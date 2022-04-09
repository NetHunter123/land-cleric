import Link from "next/link";
import { Fragment } from "react";

const
  Project = (
    <Fragment>
      <li>
        <Link href="/project-1">Project One</Link>
      </li>
      <li>
        <Link href="/project-2">Project Two</Link>
      </li>
      <li>
        <Link href="/project-3">Project Three</Link>
      </li>
      <li>
        <Link href="/project-details">Project Details</Link>
      </li>
    </Fragment>
  ),
  News = (
    <Fragment>
      <li>
        <Link href="/news-standard">News Standard</Link>
      </li>
      <li>
        <Link href="/news-details">News Details</Link>
      </li>
    </Fragment>
  ),
  Pages = (
    <Fragment>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/company-overview">Company Overview</Link>
      </li>
      <li>
        <Link href="/team-member">Team Member</Link>
      </li>
      <li>
        <Link href="/pricing">Pricing</Link>
      </li>
      <li>
        <Link href="/testimonial">Testimonial</Link>
      </li>
      <li>
        <Link href="/faq">FAQ</Link>
      </li>
    </Fragment>
  );

export { Project, Pages, News };
