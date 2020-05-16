# DragonRuby Frequently - Asked Questions, Comments, and Concerns

Here are questions, comments, and concerns that frequently come
up.

## Frequently Asked Questions

### What is DragonRuby LLP?

DragonRuby LLP is a partnership of four devs who came together
with the goal of bringing the aesthetics and joy of Ruby, everywhere possible.

Under DragonRuby LLP, we offer a number of products (with more on the
way):

- Game Toolkit (GTK): A 2D game engine that is compatible with modern
  gaming platforms. [Home Page]() [FAQ Page]()
- RubyMotion (RM): A compiler toolchain that allows you to build native, cross-platform mobile
  apps. [Home Page]() [FAQ Page]()
- Commandline Toolkit (CTK): A zero dependency, zero installation Ruby
  environment that works on Windows, Mac, and Linux. [Home Page]() [FAQ Page]()

All of the products above leverage a shared core called DragonRuby.

NOTE: From an official branding standpoint each one of the products is
suffixed with "A DragonRuby LLP Product" tagline. Also, DragonRuby is
_one word, title cased_.

NOTE: We leave the "A DragonRuby LLP Product" off of this one because
that just sounds really weird.

NOTE: Devs who use DragonRuby are "Dragon Riders/Riders of Dragons". That's a bad ass
identifier huh?

### What is DragonRuby?

The response to this question requires a few subparts. First we need
to clarify some terms. Specifically _language specification_ vs _runtime_.

### Okay... so what is the difference between a language specification and a runtime?

A runtime is an _implementation_ of a langauge specification. When
people say "Ruby," they are usually referring to "the Ruby 3.0+ language
specification implemented via the CRuby/MRI Runtime."

But, there are many Ruby Runtimes: CRuby/MRI, JRuby, Truffle, Rubinius, Artichoke,
and (last but certainly not least) DragonRuby.

### Okay... what language specification does DragonRuby use then?

DragonRuby's goal is to be compliant with the ISO/IEC 30170:2012 standard. It's
syntax is Ruby 2.x compatible, but also contains semantic changes that help
it natively interface with platform specific libraries.

### So... why another runtime?

The elevator pitch is:

DragonRuby is a Multilevel Cross-platform Runtime. The "multiple levels"
within the runtime allows us to target platforms no other Ruby can
target: PC, Mac, Linux, Raspberry Pi, WASM, iOS, Android, Nintendo
Switch, PS4, Xbox, and Scadia.

### What does Multilevel Cross-platform mean?

There are complexities associated with targeting all the platforms we
support. Because of this, the runtime had to be architected in such a
way that new platforms could be easily added (which lead to us partitioning the
runtime internally):

- Level 1 we leverage a good portion of mRuby.
- Level 2 consists of optimizations to mRuby we've made given that our
  target platforms are well known.
- Level 3 consists of portable C libraries and their Ruby
  C-Extensions.

Levels 1 through 3 are fairly commonplace in many runtime
implemenations (with level 1 being the most portable, and level 3
being the fastest). But the DragonRuby Runtime has taken things a
bit further:

- Level 4 consists of shared abstractions around hardware I/O and operating
  system resources. This level leverages open source and proprietary
  components within Simple DirectMedia Layer (a lowlevel multimedia
  component library that has been in active development for 22 years
  and counting).

- Level 5 is a codegeneration layer which creates metadata that allows
  for native interopability with host runtime libraries. It also
  includes OS specific message pump orchestrations.

- Level 6 is a Ahead of Time/Just in Time Ruby compiler built with LLVM. This
  compiler outputs _very_ fast platform specific bitcode, but only
  supports a subset of the Ruby language specification.

These levels allow us to stay up to date with open source
implementations of Ruby; provide fast, native code execution
on proprietary platforms; ensure good seperation between these two
worlds; and provides a means to add new platforms without going insane.

### Cool cool. So given that I understand everything to this point, can we answer the original question? What is DragonRuby?

DragonRuby is a Ruby runtime implentation that takes all the lessons
we've learned from MRI/CRuby, and merges it with the latest and greatest
compiler and OSS technologies.

## Frequent Comments

### But Ruby is dead.

Let's check the official source for the answer to this question:
[isrubydead.com](https://isrubydead.com/).

On a more serious note, Ruby's _quantity_ levels aren't what they used
to be. And that's totally fine. Every one chases the new and shiny.

What really matters is _quality/maturity_. Here is the latest (StackOverflow
Survey sorted by highest paid developers)[https://insights.stackoverflow.com/survey/2019#top-paying-technologies].

Let's stop making this comment shall we?

### But Ruby is slow.

That doesn't make any sense. A language specification can't be
slow... it's a language spec. Sure, an _implementation/runtime_ can be slow though, but then we'd
have to talk about which runtime.

### Dynamic langauges are slow.

They are certainly slower than statically compiled languages. With the
processing power and compiler optimizations we have today,
dynamic languages like Ruby are _fast enough_.

Unless you are writing in some form of intermediate representation by hand,
your langauge of choice also suffers this same fallacy of slow. Like, nothing is
faster than a low level assembly-like language. So unless you're
writing in that, let's stop making this comment.

NOTE: If you _are_ hand writing LLVM IR, we are always open to
bringing on new partners with such a skillset. Email us ^_^.

## Frequent Concerns

### DragonRuby is not open source. That's not right.

The current state of open source is unsustainable. Contributors work
for free, most all open source repositories are serverly understaffed,
and burnout from core members is rampant.

We believe in open source very strongly. Parts of DragonRuby are
infact, open source. Just not all of it (for legal reasons, and
because the IP we've created has value). And we promise that we are
looking for (or creating) ways to _sustainably_ open source everything we do.

If you have ideas on how we can do this, email us!

If the reason above isn't sufficient, then definitely use something else.

### DragonRuby is for pay. You should offer a free version.

If you can afford to pay for DragonRuby, you should (and will). We don't go
around telling writers that they should give us their books for free,
and only require payment if we read the entire thing. It's time we stop asking that
of software products.

That being said, we will _never_ put someone out financially. We have
income assistance for anyone that can't afford a license to any one of
our products.

You qualify for a free, unrestricted license to DragonRuby products if
any of the following items pertain to you:

- Your income is below $3,000.00 (USD) per month.
- You are under 18 years of age.
- You are a student of any type: traditional public school, home
  schooling, college, bootcamp, or online.
- You are a teacher, mentor, or parent who wants to teach a kid how to code.
- You work/worked in public service or at a charitable organization:
  for example public office, army, or any 501(c)(3) organization.

Just contact Amir at amir.rajan@dragonruby.org with a short
explanation of your current situation and he'll set you up. No
questions asked.

### But still, you should offer a free version. So I can try it out and see if I like it.

You can try our [web-based sandbox environment](). But it won't do the
runtime justice. Or just come to our [Slack]() or [Discord]() channel
and ask questions. We'd be happy to have a one on one video chat with
you and show off all the cool stuff we're doing.

Seriously just buy it. Get a refund if you don't like it. We make it
stupid easy to do so.

### I still think you should do a free version. Think of all people who would give it a shot.

Free isn't a sustainable financial model. We don't want to spam your
email. We don't want to collect usage data off of you either. We just
want to provide quality toolchains to quality developers (as opposed
to a large quantity of developers).

The peiple that pay for DragonRuby and make an effort to understand it are the
ones we want to build a community around, partner with, and collaborate
with. So having that small monetary wall deters entitled individuals
that don't value the same things we do.

### What if I build something with DragonRuby, but DragonRuby LLP becomes insolvent.

That won't happen if the development world stop asking for free stuff
and non-trivially compensate open source developers. Look, we want to be
able to work on the stuff we love, every day of our lives. And we'll go
to great lengths to make that happen.

But, in the event that sad day comes, our partnershiop bylaws state that
_all_ DragonRuby IP that can be legally open sourced, will be released
under a permissive license.
