<<<<<<< HEAD
import { useBackend } from '../backend';
import { Button, Icon } from '../components';
import { Window } from '../layouts';
=======
import { round } from 'common/math';
import { Fragment } from 'inferno';
import { useBackend } from "../backend";
import { Box, Button, Flex, Icon, LabeledList, ProgressBar, Section } from "../components";
import { Window } from "../layouts";
>>>>>>> d49640431d... Merge pull request #9062 from ShadowLarkens/tgui_finale

export const JanitorCart = (props, context) => {
  const { act, data } = useBackend(context);

<<<<<<< HEAD
  const { mybag, mybucket, mymop, myspray, myreplacer, signs, icons } = data;
=======
  const {
    mybag,
    mybucket,
    mymop,
    myspray,
    myreplacer,
    signs,
    icons,
  } = data;
>>>>>>> d49640431d... Merge pull request #9062 from ShadowLarkens/tgui_finale

  return (
    <Window width={210} height={180}>
      <Window.Content>
        <Button
          width="64px"
          height="64px"
          position="relative"
<<<<<<< HEAD
          tooltip={mybag ? mybag : 'Garbage Bag Slot'}
          tooltipPosition="bottom-end"
          color={mybag ? 'grey' : 'transparent'}
          style={{
            border: mybag ? null : '2px solid grey',
          }}
          onClick={() => act('bag')}>
=======
          tooltip={mybag ? mybag : "Garbage Bag Slot"}
          tooltipPosition="bottom-right"
          color={mybag ? "grey" : "transparent"}
          style={{
            border: mybag ? null : "2px solid grey",
          }}
          onClick={() => act("bag")}>
>>>>>>> d49640431d... Merge pull request #9062 from ShadowLarkens/tgui_finale
          <JanicartIcon iconkey="mybag" />
        </Button>
        <Button
          width="64px"
          height="64px"
          position="relative"
<<<<<<< HEAD
          tooltip={mybucket ? mybucket : 'Bucket Slot'}
          tooltipPosition="bottom"
          color={mybucket ? 'grey' : 'transparent'}
          style={{
            border: mybucket ? null : '2px solid grey',
          }}
          onClick={() => act('bucket')}>
=======
          tooltip={mybucket ? mybucket : "Bucket Slot"}
          tooltipPosition="bottom"
          color={mybucket ? "grey" : "transparent"}
          style={{
            border: mybucket ? null : "2px solid grey",
          }}
          onClick={() => act("bucket")}>
>>>>>>> d49640431d... Merge pull request #9062 from ShadowLarkens/tgui_finale
          <JanicartIcon iconkey="mybucket" />
        </Button>
        <Button
          width="64px"
          height="64px"
          position="relative"
<<<<<<< HEAD
          tooltip={mymop ? mymop : 'Mop Slot'}
          tooltipPosition="bottom-end"
          color={mymop ? 'grey' : 'transparent'}
          style={{
            border: mymop ? null : '2px solid grey',
          }}
          onClick={() => act('mop')}>
=======
          tooltip={mymop ? mymop : "Mop Slot"}
          tooltipPosition="bottom-left"
          color={mymop ? "grey" : "transparent"}
          style={{
            border: mymop ? null : "2px solid grey",
          }}
          onClick={() => act("mop")}>
>>>>>>> d49640431d... Merge pull request #9062 from ShadowLarkens/tgui_finale
          <JanicartIcon iconkey="mymop" />
        </Button>
        <Button
          width="64px"
          height="64px"
          position="relative"
<<<<<<< HEAD
          tooltip={myspray ? myspray : 'Spray Slot'}
          tooltipPosition="top-end"
          color={myspray ? 'grey' : 'transparent'}
          style={{
            border: myspray ? null : '2px solid grey',
          }}
          onClick={() => act('spray')}>
=======
          tooltip={myspray ? myspray : "Spray Slot"}
          tooltipPosition="top-right"
          color={myspray ? "grey" : "transparent"}
          style={{
            border: myspray ? null : "2px solid grey",
          }}
          onClick={() => act("spray")}>
>>>>>>> d49640431d... Merge pull request #9062 from ShadowLarkens/tgui_finale
          <JanicartIcon iconkey="myspray" />
        </Button>
        <Button
          width="64px"
          height="64px"
          position="relative"
<<<<<<< HEAD
          tooltip={myreplacer ? myreplacer : 'Light Replacer Slot'}
          tooltipPosition="top"
          color={myreplacer ? 'grey' : 'transparent'}
          style={{
            border: myreplacer ? null : '2px solid grey',
          }}
          onClick={() => act('replacer')}>
=======
          tooltip={myreplacer ? myreplacer : "Light Replacer Slot"}
          tooltipPosition="top"
          color={myreplacer ? "grey" : "transparent"}
          style={{
            border: myreplacer ? null : "2px solid grey",
          }}
          onClick={() => act("replacer")}>
>>>>>>> d49640431d... Merge pull request #9062 from ShadowLarkens/tgui_finale
          <JanicartIcon iconkey="myreplacer" />
        </Button>
        <Button
          width="64px"
          height="64px"
          position="relative"
<<<<<<< HEAD
          tooltip={signs ? signs : 'Signs Slot'}
          tooltipPosition="top-start"
          color={signs ? 'grey' : 'transparent'}
          style={{
            border: signs ? null : '2px solid grey',
          }}
          onClick={() => act('sign')}>
=======
          tooltip={signs ? signs : "Signs Slot"}
          tooltipPosition="top-left"
          color={signs ? "grey" : "transparent"}
          style={{
            border: signs ? null : "2px solid grey",
          }}
          onClick={() => act("sign")}>
>>>>>>> d49640431d... Merge pull request #9062 from ShadowLarkens/tgui_finale
          <JanicartIcon iconkey="signs" />
        </Button>
      </Window.Content>
    </Window>
  );
};

const iconkeysToIcons = {
<<<<<<< HEAD
  'mybag': 'trash',
  'mybucket': 'fill',
  'mymop': 'broom',
  'myspray': 'spray-can',
  'myreplacer': 'lightbulb',
  'signs': 'sign',
=======
  "mybag": "trash",
  "mybucket": "fill",
  "mymop": "broom",
  "myspray": "spray-can",
  "myreplacer": "lightbulb",
  "signs": "sign",
>>>>>>> d49640431d... Merge pull request #9062 from ShadowLarkens/tgui_finale
};

const JanicartIcon = (props, context) => {
  const { data } = useBackend(context);

<<<<<<< HEAD
  const { iconkey } = props;

  const { icons } = data;
=======
  const {
    iconkey,
  } = props;

  const {
    icons,
  } = data;
>>>>>>> d49640431d... Merge pull request #9062 from ShadowLarkens/tgui_finale

  if (iconkey in icons) {
    return (
      <img
        src={icons[iconkey].substr(1, icons[iconkey].length - 1)}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          width: '64px',
          height: '64px',
          '-ms-interpolation-mode': 'nearest-neighbor',
        }}
      />
    );
  }

  return (
    <Icon
      style={{
        position: 'absolute',
        left: '4px',
        right: 0,
        top: '20px',
        bottom: 0,
        width: '64px',
        height: '64px',
      }}
      fontSize={2}
<<<<<<< HEAD
      name={iconkeysToIcons[iconkey]}
    />
  );
};
=======
      name={iconkeysToIcons[iconkey]} />
  );
};
>>>>>>> d49640431d... Merge pull request #9062 from ShadowLarkens/tgui_finale
